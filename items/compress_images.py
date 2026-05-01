#!/usr/bin/env python3
import os
from pathlib import Path
from PIL import Image

ITEMS_DIR = Path(".")
MAX_WIDTH = 800
QUALITY   = 85

extensions = {".jpg", ".jpeg", ".png"}

for img_path in ITEMS_DIR.rglob("*"):
    if img_path.suffix.lower() not in extensions:
        continue

    original_size = img_path.stat().st_size / 1024

    try:
        img = Image.open(img_path).convert("RGB")

        if img.width > MAX_WIDTH:
            ratio = MAX_WIDTH / img.width
            img = img.resize((MAX_WIDTH, int(img.height * ratio)), Image.LANCZOS)

        # Always save as .jpg
        save_path = img_path.with_suffix(".jpg")
        img.save(save_path, "JPEG", quality=QUALITY, optimize=True)

        # Delete original if it had a different suffix (.jpeg or .png)
        if img_path != save_path:
            img_path.unlink()

        new_size = save_path.stat().st_size / 1024
        print(f"✓ {img_path.parent.name}/{img_path.name}  {original_size:.0f}KB → {new_size:.0f}KB")

    except Exception as e:
        print(f"✗ {img_path}: {e}")

print("\nDone.")