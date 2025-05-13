#version for 128 is on hiatus cus ff nightly is better for our purposes. up to date repo - https://github.com/notzetkin/Longfox-Nightly


# Longfox128: The Search For More Plex
Longhorn Plex demo styled browser theme for FF128esr+

## differences from another repo

well supports 128 obvs

## how do i plex
1. install ff128
2. go to help > more troubleshooting information > profile folder
3. copy contents of "firefox" folder to the directory you installed your browser in
4. copy "chrome" folder to your profile folder
5. go to "about:config" and change these settings:

    ```toolkit.legacyUserProfileCustomizations.windowIcon``` to ```true```
   
   ```toolkit.legacyUserProfileCustomizations.stylesheets``` to ```true```
   
   ```browser.uiCustomization.state``` to ```{"placements":{"widget-overflow-fixed-list":[],"unified-extensions-area":["ublock0_raymondhill_net-browser-action","_7a7a4a92-a2a0-41d1-9fd7-1e92480d612d_-browser-action","browsec_browsec_com-browser-action","firefox_tampermonkey_net-browser-action","_d10d0bf8-f5b5-c8b4-a8b2-2b9879e08c5d_-browser-action","jid1-niffy2ca8fy1tg_jetpack-browser-action","_1220100b-db8f-419f-9cd4-ed7a51cee7f3_-browser-action"],"additional_top_toolbar1":["menubar-items","urlbar-container","go-button","stop-reload-button"],"additional_top_toolbar2":["sidebar-button","customizableui-special-spacer4","customizableui-special-spacer5","customizableui-special-spacer6","customizableui-special-spacer7","customizableui-special-spacer8","downloads-button","history-panelmenu","preferences-button","unified-extensions-button"],"configuration_toolbar":[],"nav-bar":["back-button","forward-button","save-to-pocket-button","home-button","find-button","email-link-button","customizableui-special-separator12","personal-bookmarks","customizableui-special-spring25","customizableui-special-separator13","bookmarks-menu-button","gsettings-button","page-button","chrome-button"],"toolbar-menubar":[],"TabsToolbar":["tabbrowser-tabs","new-tab-button","alltabs-button"],"vertical-tabs":[],"PersonalToolbar":[]},"seen":["developer-button","go-button","activity_throbber","extensions-button","_7a7a4a92-a2a0-41d1-9fd7-1e92480d612d_-browser-action","browsec_browsec_com-browser-action","firefox_tampermonkey_net-browser-action","_d10d0bf8-f5b5-c8b4-a8b2-2b9879e08c5d_-browser-action","jid1-niffy2ca8fy1tg_jetpack-browser-action","_1220100b-db8f-419f-9cd4-ed7a51cee7f3_-browser-action","gsettings-button","page-button","chrome-button","ublock0_raymondhill_net-browser-action"],"dirtyAreaCache":["nav-bar","toolbar-menubar","TabsToolbar","PersonalToolbar","additional_top_toolbar1","additional_top_toolbar2","configuration_toolbar","unified-extensions-area","vertical-tabs"],"currentVersion":20,"newElementCount":35}```
7. restart your browser
8. go to your windows settings app and choose personalization/colors
9. change windows accent color to #4E87D4 (base color for blue plex, color of firefox theme can be changed based on windows accent color)
10. right click on a toolbar, choose "customise", enable titlebar and set bookmarks toolbar to "never show"
11. you are ready to plex! (ideally)

## to-do's
1. custom js scrollbars for 128esr
2. make menu panels look like plex demo ones
3. all vector icons
4. style sidebars settings and new tab page to be more plexy

# THANKS TO:
![AngelBruni](https://github.com/angelbruni) and ![Dominic Hayes](https://github.com/dominichayesferen) for mulicolor support from ![Geckium](https://github.com/angelbruni/Geckium)

![Aris](https://github.com/Aris-t2) for ![firefox customisation scripts](https://github.com/Aris-t2/CustomJSforFx)

![MrOtherGuy](https://github.com/MrOtherGuy) for ![js loader](https://github.com/MrOtherGuy/fx-autoconfig)

Licenses for files forked off Firefox and Chromium can be found in the files their code resides in.

# THEME IS WORK IN PROGRESS
