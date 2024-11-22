![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)
# TKMedia Documentation ([BUY/UPDATE](https://store.sansar.com/listings/1b1274e3-0f40-45f4-8d82-325d1a1c5235/tkmedia))

> - Current Version: 4.0.10.2
> - Release Date: January 2024
> - [Purchase/Update](https://store.sansar.com/listings/1b1274e3-0f40-45f4-8d82-325d1a1c5235/tkmedia)

## 📦 Package Contents
TKMedia includes two scripts:
- `Media` - Main script (ONE instance per world)
- `Event` - Optional script for trigger-based media control

⚠️ **IMPORTANT:** Add the Media script to only ONE object in your world!

## 🚀 Quick Start Guide
1. Add script to your world (ONE copy only!)
2. Drop it on any object (preferably small and hidden)
3. Set your default media URL
4. Save and test!

⚠️ **IMPORTANT:** Only ONE instance per world! Multiple copies will cause conflicts.

## ⚙️ Initial Setup

### Essential Settings
1. **Default URL** 
   - Set the media that plays when someone enters your world
   - Example: `https://youtube.com/watch?v=...`

2. **Locked Mode**
   - ON: Only moderators can control media (recommended for public worlds)
   - OFF: Anyone can control media

3. **Moderators List**
   - List who can control media when locked
   - Format: `username1,username2,{event}`
   - Always include `{event}` if using event triggers
   - Example: `tiki-8590,yourname,{event}`

4. **Map Visibility**
   - Shows your world on TKMedia's map
   - Useful for discovery

### Channel Setup
Start with default channels:
- Channel 0: Empty (no media)
- Channel 1: Public (plays default URL)

Add custom channels:
```
Format: ChannelName,DefaultURL
Example:
music,https://music-url.com
ambient,https://ambient-sound.com
```

## 📺 Playing Media

### Basic Controls
- `/tk <url>` - Play any media
- `/tk find <search>` - Search for media
- `/tk <number>` - Play from search results
- `/ta <url>` - Play audio only
- `/url <url>` - Direct URL override
- `//` - Make a comment (if enabled)

### System Commands
- `/tiki` - Show help and version info
- `/tbug` - Show debug info (moderators only)

### Supported Media
- YouTube (videos & playlists)
- Twitch (streams & clips)
- Vimeo
- SoundCloud
- Bilibili
- Mixcloud
- Direct files (MP4, M3U8, WebM, OGV)
- Internet radio

### Customize Playback
Add these to your URLs:
```
-loop           Loop media
-2x             Double speed (any number works)
-50v            50% volume
-mute           Start muted
-t=30           Start at 30 seconds
-crop=30-45     Play only seconds 30-45
-list           Force playlist mode (YouTube)
-radio          Radio stream mode
-noreload       Prevent page reload
```

Examples:
```
Background music at 50% volume:
https://youtube.com/watch?v=... -loop -50v

Play video segment on repeat:
https://youtube.com/watch?v=... -crop=100-105 -loop

Playlist on repeat:
https://youtube.com/playlist?list=... -list -loop
```

## 📡 Channel System

### Basic Channel Commands
- `/tch` - Show all channels
- `/tch <number>` - Switch channel
- `/tch open <name>` - Create new channel (moderators)
- `/tch close <number>` - Remove channel (moderators)

### Setting Up Channels
Default Channels:
- Channel 0: Empty (no media)
- Channel 1: Public (plays default URL)

Add Custom Channels:
```
Format: ChannelName,DefaultURL
Example:
music,https://music-url.com
ambient,https://ambient-sound.com
```

## 🔒 Moderation

### Moderator Commands
- `/tlock` - Check lock status
- `/tlock on` - Lock media player
- `/tlock off` - Unlock media player
- `/on/` - Enable comments
- `/off/` - Disable comments

### Advanced Settings
- **World Lock**: Use `/tlock on` in public worlds
- **Comments**: Enable/disable with `/on/` and `/off/`
- **Channels**: Create separate channels for different areas
- **Event Triggers**: Include `{event}` in moderator list

## 💡 Common Setups

### Background Music
```
1. Set Default URL to your music
2. Add "-loop -50v" to URL
3. Enable Locked mode
```

### Multi-Room Audio
```
1. Create channel per room
2. Add event triggers
3. Place triggers at entrances
```

### Event Triggers
```
1. Include {event} in moderators list
2. Create Simple Script trigger
3. Use "tch{i=?}" (? = channel number)
```

## ❓ Troubleshooting

### Media Not Playing?
1. Check URL format
2. Verify lock status
3. Confirm channel number

### Can't Control Media?
1. Check if locked
2. Verify moderator status
3. Try reloading

## 🎯 Pro Tips
- Use -50v to -70v for background music
- Test URLs before public use
- Create "Empty" channels for quiet zones
- Keep moderator list updated

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
