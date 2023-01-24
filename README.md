## Pre-Workshop Materials

Watch these 3 YouTube videos to familiarize yourself with the history API and its uses for building SPAs. **(~1.5h)**

* https://www.youtube.com/watch?v=4GqUAaLgpgs

* https://www.youtube.com/watch?v=6BozpmSjk-Y

* https://www.youtube.com/watch?v=OstALBk-jTc

## Exercise 1 - Install React Router

* Install the package

```shell
npm i react-router-dom
```

* Wrap your main component with the `BrowserRouter` provider.
  
* Add a `Routes` component with a single `Route` child that has `/page1` as `path` and a new `<Page1 />` component as `element`.

* Add a `Link` component to the navigation area and have it point to `/page1`. 

## Exercise 2 - Add a redirect route

* Use a `<Navigate to=... />` to redirect `/` to `/page1`.

## Exercise 3 - Catch all route

* Add a Route with `*` as `path` and display a `<NotFound />` component.
