import React from "react";

export default function NavigateLinkToAngular(props) {
  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        // this is added to the window scope in the Angular app.Component.ts
        // I'm open to a better way to do this, but it works
        window.AngularRouter.navigate([props.href]);
      }}
    >
      Go to the Angular Hello Route without a page refresh
    </a>
  );
}
