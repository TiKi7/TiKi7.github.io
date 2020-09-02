![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)
# TKMedia Documentation ([BUY/UPDATE](https://store.sansar.com/listings/1b1274e3-0f40-45f4-8d82-325d1a1c5235/tkmedia-v21))
> - current version: 3.0
> - release date   : September 2 2020

TKMedia Includes Two Scripts on Purchase. `Media` and `Event`.
- `Media` is your Main script and you have to add it to your Experience only once. by Adding this script, you can use all the ChatBox Commands that is Described in this page.
- `Event` is The script you can use to Open(play) Media links using Event Triggers.

``` ChatBox Commands= {/tiki, /tk, /tch, /tlock, /url, /tbug} ```

Command | Description
 :--- | :---
|/tiki | Shows Media Version + the Command List |

/tk Options... | Description
 :--- | :---
|/tk https://www.youtube.com/watch?v=F8gPLTk_ehQ | Plays the Link|
|/tk https://www.youtube.com/watch?v=F8gPLTk_ehQ 125 | Plays at 02:05 |
|/tk https://www.youtube.com/watch?v=F8gPLTk_ehQ loop | Plays in a loop|
|/tk https://www.youtube.com/watch?v=F8gPLTk_ehQ&list=RDZFXoWhux1ts list | Plays its Playlist|

> You can open any kind of link but Sources listed bellow are specially supported!

```
- Youtube(Video/list)
- Twitch(Stream/Video)
- SoundCloud
- Vimeo
- Mp4
```


/tk find Options... | Description
 :--- | :---
|/tk find THEY. - Count Me In | Searchs for Youtube videos with "THEY. - Count Me In" keyWord |
|/tk 7 | Plays Result 7 |
|/tk 7 loop | Plays Result 7 in loop |
|/tk 7 65 | Plays Result 7 at 01:05|


/tch Options... | Description
 :--- | :---
|/tch| SHows Channels List |
|/tch 11| Join Channel 11 |
|/tch open My Little Room| [ModeratorsOnly] Opens(Creates) a new Channel with "My Little Room" as Name|
|/tch close 11 | [ModeratorsOnly] Closes(Deletes) Channel Number 11|

> You can use `tch{i=?}` as Event name to Join a Channel. Exmp: `tch{i=3}` to Join Channel3


/tlock Options... | Description
 :--- | :---
|/tlock | [ModeratorsOnly] Shows Current Lock Status|
|/tlock on | [ModeratorsOnly] Activates the Lock|
|/tlock off | [ModeratorsOnly] DeActivates the Lock|


Other Options... | Description
 :--- | :---
|/url https://www....  | Opens the Link without Modifications|
|/tbug | [ModeratorsOnly] Shows the ObjectName that has your TKMedia |



### Logs

Version | Log 
:--- | :--- 
3.0 | Recreated with a new structure and commands + Ability to search(/tk find ...)
2.1 | showing video/music titles on load
2.0 | now you can use simple scripts to change channels + you can set default urls for all channels in edit mode
1.7 | people will join at the current time of video (not from the begining) (youtube tracks only)
1.6 | now you can add video source's official embed parameters for more customization.
1.5 | fixed priority of ban check in script structure. added a bunch of report messages (private chat).
1.4 | "/tkey" -> "/tpass" and now owner will get debug (Ctrl + D) message for each media request.
1.3 | adding "/tban all" and the ability to set password for public channel
