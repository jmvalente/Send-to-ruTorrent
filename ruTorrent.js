//For the most part, this was jacked from Matt Swain's Imgur Extension. It, along with others, can be found at:
// http://www.macosxtips.co.uk/extensions/
window.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event)
{
    var userInfo = {
	
        name: event.target.nodeName,
        url: event.target.href,
    }
    safari.self.tab.setContextMenuEventUserInfo(event, userInfo)
}