**OURANOS VUEJS WORDPRESS THEME BOILERPLATE** ✔

_Project Description_ ✌

This project is a VueJS boilerplate to be used as a Wordpress Theme. The idea of this project to have a VueJS Wordpress theme which eliminates the necessity to have two different hosting environments - one for the Wordpress backend and one for the VueJS frontend. All Wordpress functionality remains and the frontend would feed information through the off-the-shelf REST API provided by Wordpress themselves.

This project is built with Vue3. There might be some issues here and there with this installation, let me know if there are any improvements whatsoever to be done.

This project has already installed Vue Router, SASS compatibility, Babel Presets for older browsers and configuration for production and development environments.

_How to run this theme?_ 🐱‍🏍

1. Locally install Wordpress through your XAMPP/WAMP server and setup a database connection.
2. By using your command line interface, cd into wp-content/themes of your Wordpress installation.
3. Git clone this project.
4. Run ```npm install``` where package.json is located.
5. Run ```npm watch``` on the project.
6. Start coding and watch your project change!
7. When you are ready for production, run ```npm run prodbuild```.

_Notes_ 📝

- Running ```npm watch``` on the project would execute a watch command which executes your code as you go - you would still need to refresh your Wordpress theme frontend to see your changes.
- The same command above would pre-render your dist folder, ready for production.
- I would recommend you have a virtual host for your Wordpress project, otherwise it would mess with your routing system (to change from localhost/test to test.dev for example). If you need any help setting this up visit [here](https://www.cloudways.com/blog/configure-virtual-host-on-windows-10-for-wordpress/) - Windows version only.
- If you are new to VueJS, I would recommend having a look at their documentation [here](https://vuejs.org/guide/introduction.html). I have tried my best to include ReadMe files within each folder structure to allow you to notice what each folder serves for, however feel free to segragate your folder structure as your like.

Enjoy coding!
