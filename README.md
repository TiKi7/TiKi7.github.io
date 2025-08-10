![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)![TK Logo](/logo.png)
# TKMedia Documentation ([BUY/UPDATE](https://store.sansar.com/listings/1b1274e3-0f40-45f4-8d82-325d1a1c5235/tkmedia))

> - Current Version: 4.0.13
> - Release Date: Feb 2025
> - [Purchase/Update](https://store.sansar.com/listings/1b1274e3-0f40-45f4-8d82-325d1a1c5235/tkmedia)

Welcome to the official documentation for TKMedia, a powerful and versatile media player designed for the Sansar virtual world. This guide will provide you with everything you need to know to install, use, and master TKMedia.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [User Commands](#user-commands)
  - [YouTube Search](#youtube-search)
  - [Playback Parameters](#playback-parameters)
- [Moderator Commands](#moderator-commands)
- [Event System](#event-system)
- [Frontend Player](#frontend-player)
- [EvoBoard Integration](#evoboard-integration)
- [Advanced Topics](#advanced-topics)
  - [Channels](#channels)
  - [Overparam](#overparam)
  - [Security](#security)

---

## Introduction

TKMedia is a comprehensive media playback solution for Sansar that allows you to play a wide variety of media from different sources directly in your world. It features a robust backend script for managing media and a sleek frontend player for a seamless user experience.

---

## Features

### Backend (C# for Sansar)

*   **Multi-Channel System:** Create multiple media channels that users can join and switch between.
*   **Moderation:** Lock the media player and assign moderators who can control the playback.
*   **Event System:** Control the media player through script events, allowing for integration with other objects and systems in your world.
*   **EvoBoard Integration:** Display scoreboards from EvoBoard directly on the media player.
*   **Customizable:** Configure default URLs, channels, and moderators to fit your needs.

### Frontend (HTML/JS)

*   **Wide Range of Supported Services:**
    *   YouTube (including search)
    *   Twitch
    *   Vimeo
    *   SoundCloud
    *   Bilibili
    *   Zeno.fm
    *   Mixcloud
    *   Direct video/audio files (.mp4, .m4v, .m3u8, .webm, .ogv, .mp3)
*   **Console Interface:** A console-like display provides feedback and information to users.
*   **Audio-Only Mode:** A "flow" mode for listening to audio without video.
*   **Security:** Block or whitelist specific users or URLs from using the media player.

---

## Getting Started

1.  **Add the `Media` script** to an object in your Sansar world.
2.  **Configure the script properties** in the editor:
    *   `isActive`: Set to `true` to have the media player active by default.
    *   `isLocked`: Set to `true` to restrict control to moderators.
    *   `Default Url`: The media that will play by default in the "Public" channel.
    *   `Channels`: Add additional channels in the format `ChannelName,DefaultUrl`.
    *   `Moderators`: A comma-separated list of Sansar usernames who can control the player when it's locked.
3.  **Save and build** your world.

---

## User Commands

These commands can be used by any user in the chat.

| Command             | Description                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| `/tiki`             | Displays a help message with a list of available commands.                                              |
| `/tk <url>`         | Plays media from a URL.                                                                                 |
| `/ta <audiolink>`   | Plays an audio stream. Use `/ta` with no link to stop the audio.                                        |
| `/tch`              | Lists all available channels.                                                                           |
| `/tch <index>`      | Joins the specified channel.                                                                            |
| `// <message>`      | Sends a comment to the current channel, which will be displayed on the media player.                    |
| `/url <link>`       | Plays a direct URL. This is useful for media that is not automatically recognized by `/tk`.             |

### YouTube Search

You can search for YouTube videos directly from the chat.

| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `/tk find <keywords>`  | Searches YouTube for videos with the given keywords. |
| `/tk <index>`          | Plays a video from the search results.           |

### Playback Parameters

You can add parameters to the `/tk` command to modify the playback.

| Parameter           | Service       | Description                                                                                             |
| ------------------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| `-<seconds>`        | All           | Seeks to the specified time in seconds (e.g., `-125`).                                                  |
| `-loop`             | All           | Loops the current media.                                                                                |
| `-radio`            | All           | Enters audio-only mode with a visualizer.                                                               |
| `-list`             | YouTube       | Forces the link to be treated as a playlist.                                                            |
| `-<rate>x`          | YouTube       | Sets the playback speed (e.g., `-2x` for double speed).                                                 |
| `-<volume>v`        | YouTube       | Sets the volume from 0 to 100 (e.g., `-70v`).                                                           |
| `-crop=<start-end>` | YouTube       | Plays only a specific segment of the video (e.g., `-crop=60-120`).                                       |
| `-max`              | Twitch        | Attempts to set the video quality to the maximum available.                                             |

---

## Moderator Commands

These commands can only be used by moderators when the player is locked.

| Command             | Description                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| `/tlock <on/off>`   | Locks or unlocks the media player.                                                                      |
| `/tch open <name>`  | Opens a new channel with the specified name.                                                            |
| `/tch close <index>`| Closes the specified channel.                                                                           |
| `/on/`              | Enables comments.                                                                                       |
| `/off/`             | Disables comments.                                                                                      |

---

## Event System

The `Media` script can be controlled through script events, allowing for powerful integrations with your Sansar world.

| Event Name            | Description                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| `tk_activate_all`     | Activates the media player for all users.                                                               |
| `tk_deactivate_all`   | Deactivates the media player for all users, putting them in standby mode.                               |
| `tk_activate_agent`   | Activates the media player for the agent who triggered the event.                                       |
| `tk_deactivate_agent` | Deactivates the media player for the agent who triggered the event.                                     |

You can use the `Event` script provided to trigger these events.

---

## Frontend Player

The frontend is an HTML and JavaScript-based player that handles the actual playback of media. It receives commands from the backend script via URL hash changes and can play media from a wide variety of sources.

---

## EvoBoard Integration

TKMedia can display scoreboards from Evo games using the `EvoBoard` script.

1.  **Add the `EvoBoard` script** to an object in your world.
2.  **Configure the script properties:**
    *   `TK.Channel Index`: The channel where the scoreboard will be displayed.
    *   `Scoreboard Name`: The name of the scoreboard to display.
    *   `isTimeBased`: Set to `true` if the scores are time-based.
    *   `isAscending`: Set to `true` to sort scores from low to high.
    *   `Banner Image URL`: A URL for an image to display at the top of the scoreboard.
    *   `Background Color`: The background color of the scoreboard.
    *   `Font Color`: The font color of the scoreboard.
    *   `Scoreboard URL`: The URL of the Evo scoreboard.
    *   `Display Width` and `Display Height`: The dimensions of the scoreboard display.

---

## Advanced Topics

### Channels

TKMedia's channel system allows you to have multiple media streams running at the same time.

*   **Channel 0 (Empty):** A special channel that is always empty.
*   **Channel 1 (Public):** The default public channel.
*   **Custom Channels:** You can create your own channels in the `Media` script's properties.

Users can switch between channels using the `/tch <index>` command.

### Overparam

The `Overparam` property in the `Media` script allows you to add or override parameters for all media requests. This can be used to enforce certain settings, such as looping or volume. The format is a space-separated list of parameters, e.g., `-loop -2x -70v`.

### Security

The `Overparam` property can also be used to set up a whitelist or blacklist for users and URLs. By adding `-gate=<url>` to the `Overparam` field, you can point to a text file containing the rules.

The format for the rules file is as follows:

*   `+USER:Tiki-8590` - Whitelists a user.
*   `-USER:BadUser-1234` - Blacklists a user.
*   `+URL:www.youtube.com/*` - Whitelists a URL (wildcards are supported).
*   `-URL:www.badsite.com/*` - Blacklists a URL.
*   Lines starting with `#` are ignored.


Need help? Contact: tiki-8590

---
*TKMedia v4.0.10.2 - Making Sansar Worlds More Interactive*



### Logs

Version | Log 
:--- | :--- 
4.0.13 | new Feature that lets TKMedia be put on Standby. in this state it wont effect media streams in the world.  no interfering with other media management scripts
4.0.12 | Better and faster page title processing
4.0.11 | fixing problems with TK.Event script which caused the whole script going down
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
