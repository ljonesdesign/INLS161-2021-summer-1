---
title: Command Line
sidebar_label: 05-20 Thu | Command Line
sidebar_position: 2
---

The file naming conventions detailed in the last session are copied over from the INLS 161 lectures and are fine. I follow web development recommendations, so my personal preferences are different. Here is a [post about my file naming conventions](/blog/file-naming-conventions).

## Eduroam or VPN

Before we try to log into OPAL with a command line interface (CLI) you must have your VPN client installed and connected.

![vpn image](/img/active-vpn-example.png)

## Viewing your Public OPAL directory

## Get to Know the Tilde

To view your ```public_html``` file with a web browser, you need to use the ```~``` character

It's the <kbd>shift + backtick</kbd> under, or near, the <kbd>esc</kbd> key:

![tilde](/img/tilde.png).

Open a browser and replace your **onyen** with your personal onyen. Example: **opal.ils.unc.edu/~kellyd.** 

Mine is opal.ils.unc.edu/~lblakej: 

![browser with opal](/img/browser-opal.png)

I have an account and I have set my permissions, so you can see my site directory: <https://opal.ils.unc.edu/~lblakej>

If you see **Forbidden** message, that means you have an account, but you have permission problems. Let me know in the Zoom chat if
this is that case for you. This semester, the permissions should have been set for you.

Darth Vader **does not** have an account on opal, so he **can't be found**: <https://opal.ils.unc.edu/~darthv>

```
The requested URL /~darthv was not found on this server.
```

There is nothing at the opal main page: <https://opal.ils.unc.edu/>; you will just see a blank browser window.

## Learning Objectives

log into OPAL ```ssh onyen@opal.ils.unc.edu```
1. create a directory named ```task-screenshots```
2. Practice some basic LINUX skills


When you create websites, you should verify your sites with Chrome and/or Firefox. At least use one of these to check/verify your coding. If you are only using Safari, then you are only seeing your site through a Mac "lens." If you are only using Microsoft Explorer or Edge, your are only seeing it as a "PC" user. Also, you need to understand that browsers "cache" pages to save network resources. So it may be necessary to view your website changes in private (Firefox) or incognito (Chrome) mode to see website updates.

### To login to OPAL with on the Command Line

You can log into your OPAL account with current permission settings. 

>If you are curious about permissions, here is a permissions calculator to help you grasp the number system [Permissions Calculator](http://permissions-calculator.org/)

* Mac Users: Use Terminal
* PC Users: Use PowerShell or Command Prompt or GitBash

> You need to be on eduroam to login on campus, and you need to have VPN and DUO installed to log in, if you don’t have access to eduroam.

:::warning
The terminal password prompt does not give you feedback. You just have to type carefully and hit enter. If you mess up, it will give you a few more chances to get in. If you make a lot of mistakes, it will make you put in the ssh command again.
:::


1.  type `ssh _***onyen**_@opal.ils.unc.edu  then <enter>`
    1.  ***Replace _`onyen` and put in your `onyen`._**
    2.  **_Example:_ **`ssh smithj@opal.ils.unc.edu`
2.  Accept and Save the host key, if requested. (This is the encryption key that lets ITS identify you).
3.  You will be prompted for your ONYEN password. Enter the password at the prompt, which might be a key or a dot or a rectangle or a `$`.

## Viewing Your Webpage

After you have uploaded your files and set the correct permissions, your webpage will be viewable at https://opal.ils.unc.edu/~onyen/ . This will take you to the index page in your public_html folder; you can also navigate directly to other pages or subfolders you've added, such as https://opal.ils.unc.edu/~lblakej/website-helps/


## Task 01.04: Create a Directory

If not yet logged in to your OPAL account, use a terminal connection program and enter a temporary shell session at the command prompt (it should be $ in Unix).

```
ssh onyen@opal.ils.unc.edu
```

Change to your public_html directory.

```
cd public_html
```

Create a new subdirectory within public_html 

```
mkdir task-screenshots
```

You are now ready to proceed to use SFTP to place your screenshots in this directory.


**Grading rubric:** You must follow file naming conventions: **NO SPACES**; no strange characters. Use hyphens or periods where you would have spaces. Try to stick with lowercase letters. After you have created your directory, open the related assignment and paste your link in the submission box.


## Helpful Links

* [Fosswire Unix/Linux Command Reference](https://files.fosswire.com/2007/08/fwunixref.pdf)
* [UNC ITS help sheet](https://github.com/ljonesdesign/161-recitations/blob/master/docs/files/unc-unix-help.pdf)
* [A Command Line Primer for Beginners](https://lifehacker.com/a-command-line-primer-for-beginners-5633909)


## Basics: Command Line Cheat Sheet
[What is the Bash Shell?](https://en.wikipedia.org/wiki/Bash_(Unix_shell))

## Excellent YouTube Command line demos for Mac & PC

*These are optional, but highly recommended if you are interested in pursuing any type of web development.*

* [Absolute Beginner Guide to the Mac OS Terminal](https://www.youtube.com/watch?v=aKRYQsKR46I)
* [Command Line Interface Tutorial (with GitBash)](https://www.youtube.com/watch?v=sw9kdFka8rA)

If you decide to download [git for windows](https://gitforwindows.org) to tryout GitBash, just install with all of the default items.  

> The Git GUI will be installed, but you won't need that for this tutorial, and you probably will not ever use it. I don't ever use it. So that could be the one item that you uncheck and don't install.

GitBash is the easiest way to get to play with command line tools like you would on a Mac. Git is another thing altogether, and this video does not get into git or github. It is also possible now to install [Linux Ubuntu as a Subsystem on Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10), but it is too complicated to include in this course.

## Extra File extension?

Today we will post some of your screenshots on OPAL. If you see an extra ```.PNG``` on your file, like this:

```
lastname-firstname-vpn.png.PNG
```

Then your file extensions are hidden on your laptop, and you added an extra file extension without realizing it. (The OPAL server does not hide extensions.)

This will not really be an issue when you are coding with a robust text editor like [Atom](https://atom.io/), or [VSCode](https://code.visualstudio.com/) as extensions will always show up in the sidebar of the app, and you can rename files in the sidebar. However, if you are curious about how to show or hide extensions, here are some videos:

* [Windows help](https://www.youtube.com/watch?v=PoTah9YBG2Y)
* [Mac Help](https://www.youtube.com/watch?v=ylbme95jnEo)
