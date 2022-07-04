export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.title = "Ben's Portfolio";
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
   let div = document.body.children[0];
   let h1 = div.children[0];
   h1.innerText = "Ben Wilkins";
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
    let div = document.body.children[1];
    let aboutMe = div.children[1];
    aboutMe.innerText = "I have an MS in Environmental Studies and I'm working through App Academy's curriculum in hopes of getting an entry level software engineering job!"
}
