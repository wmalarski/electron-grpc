import logging
import re
from pathlib import Path

import click
from grpc_tools import protoc


@click.group()
def cli():
    logging.basicConfig()


@cli.command("types")
def types() -> None:
    server_dir = Path(__file__).parent
    protos_dir = server_dir.parent / "protos"
    types_dir = server_dir / "grpc_types"
    proto_files = [str(proto) for proto in protos_dir.glob("*.proto")]

    protoc.main([
        protoc.__file__,
        "-I",
        str(protos_dir),
        "--python_out",
        str(types_dir),
        "--grpc_python_out",
        str(types_dir),
        *proto_files,
    ])

    for source_code in types_dir.glob('*.py'):
        with source_code.open('r+') as file:
            code = file.read()
            file.seek(0)
            file.write(re.sub(r'\n(import .+_pb2.*)', 'from . \\1', code))
            file.truncate()


@cli.command("run")
def run() -> None:
    from .server import run_server
    run_server()
