# 12Keys Course project for Web Development course

## Topic - Chords editor/player

The project has two main functionalities - chords visualizer for different instruments (currently only piano) and displaying song lyrics (with or without chords). In addintion, users can create accounts and log into their profiles.

### Chord visualizer 
Chord visualizer is accessible for everyone whether or not registered. On the page with instruments are displayed all avaliable instrument option. Choosing any of them send the user to the page for the particular instrument where  
the chords visualizer shows how each of the 12 main chords (with major/minor) variantion can be played in each of the 3 inversions. Additionally there is sound preview of the chord in each inversion played note by note and the chord as a whole.

### Song lyrics
Similar to instruments there is also a page with all available songs. It is also is accessible for everyone but only to logged in users is shown add song option from which they
can add new songs to the database. When the user chooses a song, the song lyrics with/without chords display the text of a song along with it's meta information such as
title, author, tempo, key, time signature and youtube video. Above the text are the chords of the song which can be transposed dynamically in any key. Furthermore, 
the user can hide and display chords as well as can learn the chords used in the song since they are extracted from the lyrics autmatically and linked to the chords visualizer.

Basic user authentication and authorization are developed. User details are checked in the databese before registration and log in and access to the pages is controlled, too.  

The application is developed using PHP as backend and plain HTML, CSS and JavaScript for the frontend. The database is MySQL.
