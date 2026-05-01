#!/usr/bin/env python3
# compress_images.py — run from inside the items/ folder
import os
from pathlib import Path
from PIL import Image

ITEMS_DIR = Path(".")
MAX_WIDTH = 800       # resize if wider than this
QUALITY   = 85        # JPEG quality (85 is good balance)

extensions = {".jpg", ".jpeg", ".png"}

for img_path in ITEMS_DIR.rglob("*"):
    if img_path.suffix.lower() not in extensions:
        continue
    if img_path.name == "catalog.json":
        continue

    original_size = img_path.stat().st_size / 1024  # KB

    try:
        img = Image.open(img_path).convert("RGB")

        # Resize if too wide
        if img.width > MAX_WIDTH:
            ratio = MAX_WIDTH / img.width
            new_size = (MAX_WIDTH, int(img.height * ratio))
            img = img.resize(new_size, Image.LANCZOS)

        # Always save as JPEG (even PNGs) for smaller size
        save_path = img_path.with_suffix(".jpg")
        img.save(save_path, "JPEG", quality=QUALITY, optimize=True)

        # Remove original if it was a PNG saved as .jpg
        if img_path.suffix.lower() == ".png" and save_path != img_path:
            img_path.unlink()

        new_size = save_path.stat().st_size / 1024
        print(f"✓ {img_path.parent.name}/{img_path.name}  {original_size:.0f}KB → {new_size:.0f}KB")

    except Exception as e:
        print(f"✗ {img_path}: {e}")

print("\nDone.")