# Compact view for the ownCloud News app

Simple proof of concept for a title only view addon for the news app. If you're interested in maintaining it, please contact me or simply fork it.

## Installation

- Clone the **News Compatct** app into the **/var/www** directory:

    https://github.com/Raydiation/newscompact.git

- Link it into ownCloud's apps folder:

    ln -s /var/www/newscompact /var/www/owncloud/apps

- Activate the **News Compact** App in the apps menu

## Creating and distributing over the app store

To create the zip which should be distributed over the app store you can use the Makefile to generate a zip from the current git repository:

	make dist
