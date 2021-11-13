function startAllSideNavsInstances() {
    var allSideNavs = document.querySelectorAll(".sidenav")
    if (allSideNavs.length === 0) {
        // load and DOMContentLoaded returns empty arrays, so a time out is need for waiting the elements to apper on document
        window.setTimeout(() => {
            return startAllSideNavsInstances()
        }, 300)
    } else {
        var sideNavInstances = M.Sidenav.init(allSideNavs)
    }
}

startAllSideNavsInstances()