# Longfox128: The Search For More Plex
Longhorn Plex demo styled browser theme for r3dfox and FF128esr

## differences from another repo

well supports 128 obvs

## how do i plex
1. install r3dfox or ff 128esr
2. go to help > more troubleshooting information > profile folder
3. copy contents of "firefox" folder to the directory you installed your browser in
4. copy "chrome" folder to your profile folder
5. go to "about:config" and change these settings:

    ```toolkit.legacyUserProfileCustomizations.windowIcon``` to ```true```
   
   ```toolkit.legacyUserProfileCustomizations.stylesheets``` to ```true``` (enabled by default in r3dfox)
   
   ```browser.uiCustomization.state``` to ```{"placements":{"widget-overflow-fixed-list":[],"unified-extensions-area":[],"nav-bar":["back-button","forward-button","save-to-pocket-button","unified-extensions-button","home-button","find-button","email-link-button","customizableui-special-separator12","personal-bookmarks","customizableui-special-spring9","customizableui-special-separator13","bookmarks-menu-button"],"toolbar-menubar":["customizableui-special-spring2","activity_throbber","customizableui-special-spring1"],"TabsToolbar":["tabbrowser-tabs","new-tab-button","alltabs-button"],"PersonalToolbar":[],"additional_top_toolbar1":["menubar-items","urlbar-container","go-button","stop-reload-button"],"additional_top_toolbar2":["sidebar-button","customizableui-special-spacer4","customizableui-special-spacer5","customizableui-special-spacer6","customizableui-special-spacer7","customizableui-special-spacer8","downloads-button","history-panelmenu","extensions-button","preferences-button"],"configuration_toolbar":[]},"seen":["developer-button","go-button","activity_throbber","extensions-button","_7a7a4a92-a2a0-41d1-9fd7-1e92480d612d_-browser-action","browsec_browsec_com-browser-action","firefox_tampermonkey_net-browser-action","_d10d0bf8-f5b5-c8b4-a8b2-2b9879e08c5d_-browser-action","jid1-niffy2ca8fy1tg_jetpack-browser-action","_1220100b-db8f-419f-9cd4-ed7a51cee7f3_-browser-action"],"dirtyAreaCache":["nav-bar","toolbar-menubar","TabsToolbar","PersonalToolbar","additional_top_toolbar1","additional_top_toolbar2","configuration_toolbar","unified-extensions-area"],"currentVersion":20,"newElementCount":16}```
7. restart your browser
8. you are ready to plex! (ideally)

## differences betveen r3dfox and 128 esr
### 128esr:
- doesn't have true round corners 
- doesnt have native scrollbars
- small padding issues in menus with favicons and address bar
### r3dfox:
- works just fine somehow

theme compatability between the two is pretty much 99.8%  

## to-do's
1. animate activiry throbber
2. custom scrollbars for 128esr
3. make menu panels look like plex demo ones
4. all vector icons
5. try to restore active tab border
6. style sidebars settings and new tab page to be more plexy
7. get throbber label to show tab name somehow

# THEME IS WORK IN PROGRESS
