<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="<?= get_site_url() ?>/wp-content/themes/zuus-vuejs-wp-theme-boilerplate/dist/assets/favicon.ico"/>
    <title>Kristina Xuereb - Data Scientist</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-197845293-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-197845293-1');
    </script>

    <?php wp_head(); ?>
</head>
<body>

    <div id="app"></div>
    <!-- Vue components will be built here -->

    <?php wp_footer(); ?>
</body>
</html>
