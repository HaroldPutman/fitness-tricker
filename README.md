# Fitness Tricker
Log simulated activity to a major fitness tracking website.

## Quickstart

```
git clone https://github.com/HaroldPutman/fitness-tricker.git
cd fitness-tracker
# create config/local.json with username and password
npm install
npm start
```
Repeat daily.

## Preparation

You can set up an account on that "two-rhyming-syllable" fitness
tracker site without owning a an actual device. Do that first.

### VM setup
If you are setting up on a Ubuntu virtual server you might need to
install some dependencies for headless chrome. I did this...
```
apt-get update
apt-get install -yq --no-install-recommends \
     libasound2 libatk1.0-0 libcairo2 libcups2 libfontconfig1 \ libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 \ libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libx11-6 \
     libx11-xcb1 libxcb1 libxcursor1 libxdamage1 libxfixes3 \
     libxi6 libxrandr2 libxrender1 libxss1 libxtst6 libnss3
```

## Configuration
Copy [config/default.json](config/default.json) to `config/local.json`
and change anything you want in there, starting with the
username/password.

### Data.Steps
Set the number of steps, or provide a range to get a random value
within that range (ex. `7000-8000`).

### Data.time
Not implemented. Always 6:15 AM for now.
