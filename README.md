#BAMPFA Wraith Config

This is a set of files to use for testing bampfa.org with BBC News' screenshot comparison tool [Wraith](http://bbc-news.github.io/wraith/).

To get up and running with Wraith: Start by following the Pantheon instructions for [installing Wraith](https://pantheon.io/docs/guides/visual-diff-with-wraith/), but rather than run 'wraith setup', clone this repo.

You can compare two URLs by entering them into capture.yaml and running 'wraith capture capture'. To compare a single URL over time, run 'wraith history history' to establish a baseline, and then once changes have been made, run 'wraith latest history' to compare.

