from pathlib import Path
p = Path(__file__).parent / "dist/index.html"
assert p.is_file()
print("Buildless site ready:", p)
