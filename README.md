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
   
   ```browser.uiCustomization.state``` to ```{"placements":{"nav-bar":["back-button","forward-button","home-button","find-button","email-link-button","customizableui-special-separator15","personal-bookmarks","customizableui-special-separator13","bookmarks-menu-button","unified-extensions-button","reset-pbm-toolbar-button"],"toolbar-menubar":["menubar-items","customizableui-special-spring120","activity_throbber","customizableui-special-spring125"],"TabsToolbar":["tabbrowser-tabs","new-tab-button","alltabs-button"],"PersonalToolbar":[],"additional_top_toolbar1":["urlbar-container","go-button","stop-reload-button"],"additional_top_toolbar2":["sidebar-button","customizableui-special-spacer146","customizableui-special-spacer147","customizableui-special-spacer148","customizableui-special-spacer149","customizableui-special-spacer150","customizableui-special-spacer151","downloads-button","history-panelmenu","extensions-button","preferences-button","customizableui-special-spring73","customizableui-special-spring123","customizableui-special-spring122","customizableui-special-spring75","customizableui-special-spring77","customizableui-special-spring79"],"configuration_toolbar":[]},"seen":["save-to-pocket-button","developer-button","activity_throbber","go-button","_7a7a4a92-a2a0-41d1-9fd7-1e92480d612d_-browser-action","browsec_browsec_com-browser-action","firefox_tampermonkey_net-browser-action","_d10d0bf8-f5b5-c8b4-a8b2-2b9879e08c5d_-browser-action","jid1-niffy2ca8fy1tg_jetpack-browser-action","_1220100b-db8f-419f-9cd4-ed7a51cee7f3_-browser-action","_3c078156-979c-498b-8990-85f7987dd929_-browser-action","extensions-button","user-agent-switcher_ninetailed_ninja-browser-action","_35dd5f9a-ca89-4643-b107-f07d09cc94b5_-browser-action","treestyletab_piro_sakura_ne_jp-browser-action"],"dirtyAreaCache":["nav-bar","PersonalToolbar","toolbar-menubar","TabsToolbar","additional_top_toolbar1","configuration_toolbar","unified-extensions-area","additional_top_toolbar2"],"currentVersion":20,"newElementCount":157}```
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
