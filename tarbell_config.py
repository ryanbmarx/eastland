# -*- coding: utf-8 -*-

"""
Tarbell project configuration
"""

# Google spreadsheet key
SPREADSHEET_KEY = "1WwVJvKfOX7xvTq0GX7gd4hvGQ6yLaNl7ErPQjPJoiag"

# Exclude these files from publication
EXCLUDES = ["*.md", "requirements.txt"]

# Spreadsheet cache lifetime in seconds. (Default: 4)
# SPREADSHEET_CACHE_TTL = 4

# Create JSON data at ./data.json, disabled by default
# CREATE_JSON = True

# Get context from a local file or URL. This file can be a CSV or Excel
# spreadsheet file. Relative, absolute, and remote (http/https) paths can be 
# used.
# CONTEXT_SOURCE_FILE = ""

# EXPERIMENTAL: Path to a credentials file to authenticate with Google Drive.
# This is useful for for automated deployment. This option may be replaced by
# command line flag or environment variable. Take care not to commit or publish
# your credentials file.
# CREDENTIALS_PATH = ""

# S3 bucket configuration
S3_BUCKETS = {
    # Provide target -> s3 url pairs, such as:
    #     "mytarget": "mys3url.bucket.url/some/path"
    # then use tarbell publish mytarget to publish to it
    
    "production": "graphics.chicagotribune.com/news/local/eastland",
    "staging": "graphics.beta.tribapps.com/eastland",
    "secret": "graphics.chicagotribune.com/KcAyEKoeYTDjWCcybA8FNeWJhyzs"
}

# Default template variables
DEFAULT_CONTEXT = {
    'name': 'eastland',
    'title': "Eastland Disaster",
    'OMNITURE': {
            'domain': 'chicagotribune.com',
            'sitename': 'Chicago Tribune',
            'section': 'news',
            'subsection': 'features',
            'subsubsection': '',
            'type': 'dataproject',
        },
}

# Add some filters
from flask import Blueprint
blueprint = Blueprint('noble-charter-discipline', __name__)
import locale
locale.setlocale(locale.LC_ALL, 'en_US')

@blueprint.app_template_filter('roundme')
def roundme(text):
   text=int(text)
   return text

   
@blueprint.app_template_filter('add_suffix')
def add_suffix(text):
  text = str(text)
  if text.endswith("1"):
    text = text + "st"
  elif text.endswith("2"):
    text = text + "nd"
  elif text.endswith("3"): 
    text = text + "rd"
  else:
    text = text + "th"
  return text 