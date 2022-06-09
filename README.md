# MathEquationsGoogleSlide_V2
This extension relays heavly on the [mathequations-copmonent](https://github.com/brendena/MathEquations-component).  This extension is just basically a wrapper for it.

# Data usage
I don't collect any data with this extension.  The only auth scopes i use are for adding the image to the google slides.  Since google slide extensions are in a iframe i can't have the user copy to the clipboard or drag and drop the image as i would normally.  If this is wrong, add a issue and i'll take a look at it.

# Application info
## important info
* google slide extensions can't have js files, so what happens is there's a build script to make a html page with a script tag.

## Build
* buildComponents.sh - builds the web component and creates a file Math_Equation_component.html. Which currently i copy and past into the google app script editor because it's to big for the [extension i use to push](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo?hl=en)
