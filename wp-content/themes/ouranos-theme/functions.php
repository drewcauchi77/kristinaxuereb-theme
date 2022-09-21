<?php

function load_vue_scripts() {
    wp_enqueue_script('/dist/scripts/app.js', get_template_directory_uri() . '/dist/main.js', null, null, true);
}

add_action('wp_enqueue_scripts', 'load_vue_scripts', 100);

?>