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

## Configuration
Copy [config/default.json](config/default.json) to `config/local.json`
and change anything you want in there, starting with the
username/password.

### Data.Steps
Set the number of steps, or provide a range to get a random value
within that range (ex. `7000-8000`).

### Data.time
Not implemented. Always 7:30 AM for now.
