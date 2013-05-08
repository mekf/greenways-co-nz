#!/bin/bash

wget --recursive --no-clobber --limit-rate=30K --page-requisites --html-extension --domains greenways.co.nz --no-parent
wget --recursive --convert-links --no-clobber --limit-rate=30K --page-requisites --html-extension --domains greenways.co.nz --no-parent

 # --convert-links \
 # --restrict-file-names=windows \