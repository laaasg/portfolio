# lauragoncalves.me
Portfolio | Freelance

Start local server and open Chrome in a way to be able to access files:
```bash
python3 server.py
open /Applications/Google\ Chrome.app/ --args --allow-file-access-from-files;
```

Find all jpg and png files and convert them to webp:
```bash
find assets/ -name '*.jpg' -o -name '*.png' -exec mogrify -format webp -quality 90 {} \;
```

Convert video to animated webp:
```bash
ffmpeg -i <original-video> -vcodec libwebp -lossless 1 -q 60 -preset default -loop 0 -an -s 720x630 -r 10 output.webp
```
- `-q` is the quality
- `-s` the resolution
- `-r` the frame rate
