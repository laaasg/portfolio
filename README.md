# lauragoncalves.me

Portfolio | Freelance

## Installation

Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo >> $HOME/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> $HOME/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Install GitHub CLI, Zed and other tools
```bash
brew install gh
brew install --cask zed
brew install imagemagick
brew install ffmpeg
```

Login to GitHub and go through the prompts by just confirming
```bash
git config --global user.email "laaasg@gmail.com"
git config --global user.name "Laura Goncalves"
git config --global pull.rebase true
gh auth login --hostname github.com --git-protocol ssh --web
```

Clone repository and the open it in Zed
```bash
git clone git@github.com:laaasg/portfolio.git Documents/<directory>
```

## Development

Start local server and open Chrome in a way to be able to access files:
```bash
python3 server.py
```

If Chrome fails to load local files, close it and run the following command:
```
open /Applications/Google\ Chrome.app/ --args --allow-file-access-from-files;
```

## Image and video things

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
