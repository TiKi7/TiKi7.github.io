![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)
# TKMedia Documentation ([BUY/UPDATE](https://store.sansar.com/listings/1b1274e3-0f40-45f4-8d82-325d1a1c5235/tkmedia))

# TKMedia v4 Documentation
> - Current Version: 4.0.10.2
> - Release Date: January 2024
> - [Purchase/Update](https://store.sansar.com/listings/1b1274e3-0f40-45f4-8d82-325d1a1c5235/tkmedia)

## 📦 Package Contents
TKMedia includes two scripts:
- `Media` - Main script (ONE instance per world)
- `Event` - Optional script for trigger-based media control

⚠️ **IMPORTANT:** Add the Media script to only ONE object in your world!

## 🚀 Quick Start
1. Add `Media` script to a small, hidden object
2. Set default media URL in script properties
3. Configure moderator list (if needed)
4. Save and test!

## ⚙️ Initial Setup

### Essential Settings

 
Setting | Description | Example
:--- | :--- | :---
Default URL | Media that plays on world entry | `youtube.com/watch?v=...`
Locked Mode | Restrict media control to moderators | ON for public worlds
Moderators List | Who can control media when locked | `username1,username2,{event}`
Map Visibility | Show your world on TKMedia's map | Enable for discovery
 

### Default Channels

 
Channel | Purpose | Note
:--- | :--- | :---
Channel 0 | Empty (no media) | Use for quiet zones
Channel 1 | Public (default URL) | Main channel
 

### Adding Custom Channels
```
Format: ChannelName,DefaultURL
Examples:
music,https://youtube.com/watch?v=... -loop -50v
ambient,https://soundcloud.com/... -radio
```

## 📋 Command Reference

 

Command | Description
:--- | :---
`/tiki` | Shows version info and command list
`/tbug` | [Moderators] Shows script object name
`/tlock` | [Moderators] Shows lock status
`/tlock on/off` | [Moderators] Controls media lock

 

### Media Controls

 

Command | Description | Example
:--- | :--- | :---
`/tk <url>` | Play media | `/tk youtube.com/watch?v=...`
`/tk find <search>` | Search YouTube | `/tk find lofi music`
`/tk <number>` | Play search result | `/tk 3`
`/ta <url>` | Audio-only mode | `/ta stream.url/...`
`/url <url>` | Direct URL override | `/url direct.mp4`
`//` | Add comment (if enabled) | `// Great song!`

 

### Channel System

 

Command | Description | Example
:--- | :--- | :---
`/tch` | Show channel list | -
`/tch <number>` | Switch channel | `/tch 2`
`/tch open <name>` | [Moderators] Create channel | `/tch open Music Room`
`/tch close <number>` | [Moderators] Delete channel | `/tch close 3`

 

## 🎵 Media Support

 

### Supported Platforms

 

Platform | Features | Notes
:--- | :--- | :---
YouTube | Videos, Playlists | Best compatibility
Twitch | Streams, Clips | Requires proper domain setup
SoundCloud | Tracks | Audio only
Vimeo | Videos | Standard playback
Bilibili | Videos | Basic support
Direct Files | MP4, M3U8, WebM | Check compatibility first

 

### URL Parameters

 

Parameter | Effect | Example
:--- | :--- | :---
`-loop` | Loop media | `-loop`
`-2x` | Double speed | `-2x` (any number works)
`-50v` | Set volume to 50% | `-50v` (0-100)
`-mute` | Start muted | `-mute`
`-t=30` | Start at 30 seconds | `-t=30`
`-crop=30-45` | Play seconds 30-45 | `-crop=30-45`
`-list` | Force playlist mode | `-list` (YouTube)
`-radio` | Radio stream mode | `-radio`

 

#### Example Combinations

```
Background music at 50% volume:
youtube.com/watch?v=... -loop -50v

Video segment on repeat:
youtube.com/watch?v=... -crop=100-105 -loop

Playlist on repeat:
youtube.com/playlist?list=... -list -loop
```

 

## 🔒 Moderation

 

### Basic Controls

Command | Effect | Note
:--- | :--- | :---
`/tlock on` | Lock media control | Recommended for public worlds
`/tlock off` | Unlock media control | Allow anyone to control
`/on/` | Enable comments | Let users comment on media
`/off/` | Disable comments | Disable comment system

 

### Setting Up Moderators

1. Add usernames to moderator list
2. Separate with commas
3. Include `{event}` for triggers
```
Example: tiki-8590,yourname,{event}
```

 

## 💡 Common Setups

 

### Background Music

```
1. Set Default URL: youtube.com/watch?v=... -loop -50v
2. Enable Lock: /tlock on
3. Add moderators to list
```

 

### Multi-Room Audio

```
1. Create channel per room: /tch open RoomName
2. Set default URLs for each
3. Add Event triggers at entrances
```

 

### Event Triggers

```
1. Add {event} to moderator list
2. Place Event script on trigger
3. Use tch{i=?} for channel changes
```

 

## ❓ Troubleshooting Guide

 

Problem | Check | Solution
:--- | :--- | :---
Media won't play | URL format | Verify platform support
No control | Lock status | Check moderator status
Choppy voice chat | Active media | Use `/tk off` when idle
Channel issues | Channel number | Use `/tch` to verify

 

## 🎯 Pro Tips

- Use `-50v` to `-70v` for background music
- Test URLs before public use
- Create "Empty" channels for quiet zones
- Keep moderator list updated
- Include `{event}` if using triggers

 

Need help? Contact: tiki-8590

---
*TKMedia v4.0.10.2 - Making Sansar Worlds More Interactive*



### Logs

Version | Log 
:--- | :--- 
4.0.10 | added a new overparam parameter called `gate`. [example file](https://raw.githubusercontent.com/TiKi7/TiKi7.github.io/master/gatefile.txt)
4.0.9 | added `overparam` input to script properties. this input, overrides all the parameters users may add to their `/tk videolink -params=value` calls inworld.
4.0.6 | from this version on a "-" will be added before all optional parameters (Example: -loop instead of loop)
3.5.5 | Now Supporting M3U8 Files.
3.5.4 | loading .m4a using /tk will freeze your media script. from now on its blocked. but if you need it as a radio link, you can use /ta command. (if you know more similar formats that needs to be blocked, you can message me. )
3.5.3 | "/tk off" or "/url" will turn off media screen. it may help to fix choppy voice chat when there is no video playing.
3.5.1 | //tk will not show video title in the chatbox
3.5.0 | ---
3.4.0 | // <Message> to comment on the video. /on/ and /off/ to turn this On and Off.
3.4.0 | Added /ta to change AudioStream source (Moderator's Only Access)
3.3.4 | Minor Updates
3.3.3 | Added tlock on and tlock off event names
3.3.2 | Added Bilibili.com to supported websites. (its a chinese web service)
3.3.1 | Minor Updates
3.3 | Added WIXIA.com to supported websites. Fixed the Crash on Opening Vimeo videos.
3.2 | Fixed the bug related to opening mp4 files
3.0 | Recreated with a new structure and commands + Ability to search(/tk find ...)
2.1 | showing video/music titles on load
2.0 | now you can use simple scripts to change channels + you can set default urls for all channels in edit mode
1.7 | people will join at the current time of video (not from the begining) (youtube tracks only)
1.6 | now you can add video source's official embed parameters for more customization.
1.5 | fixed priority of ban check in script structure. added a bunch of report messages (private chat).
1.4 | "/tkey" -> "/tpass" and now owner will get debug (Ctrl + D) message for each media request.
1.3 | adding "/tban all" and the ability to set password for public channel
