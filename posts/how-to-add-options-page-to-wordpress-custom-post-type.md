---
id: 3,
title: 'How to add an options page to custom post types in WordPress'
date: '24 Jul 2021'
img: {
    url: '/static/img/posts/wordpress-options-page.jpg', 
    width: 1000, 
    height: 663,
    layout: 'responsive'
}
---

## TL;DR version:

### Native WordPress Submenu Page:
```php
// Add to functions.php

// Register submenu page 
add_action('admin_menu', 'msd_page_settings');
function msd_page_settings(){
	add_submenu_page(
		'edit.php?post_type=YOUR_POST_TYPE_SLUG',
		'Custom Post Type Page Title',
		'Custom Post Type Options',
		'edit_posts',
		'custom-post-type-options',
		'msd_callback_fuction',
		null
	);
}

// Callback function to display your options
function msd_callback_fuction(){	
}
```

### ACF Pro Options Page:
```php
// Add to functions.php
if (function_exists('acf_add_options_sub_page')) {
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Custom Post Type Options Title',
		'menu_title'	=> 'Custom Post Type Options',
		'parent_slug'	=> 'edit.php?post_type=YOUR_POST_TYPE_SLUG',
	));
}
```

***

## Detailed Version:
Sometimes you need to add an options page to your custom post type. Options pages are generally used for customisable bits of your plugin or theme. For example, you might want to add some fields for a nice banner with a heading and background image on your custom post type's archive pages. The two main ways that I have been using are the native WordPress way and the ACF way.

### Native WordPress Submenu Page:
WordPress has a handy and relatively comprehensive tutorial for creating an options page which you can find *[here](https://codex.wordpress.org/Creating_Options_Pages)*. As we only need to add a submenu to our custom post type in the back-end, we just need the add_submenu_page function.
As you can see below, this function accepts 7 parameters:

```php
add_submenu_page( 
	string $parent_slug, 
	string $page_title, 
	string $menu_title, 
	string $capability, 
	string $menu_slug, 
	callable $function = '', 
	int $position = null 
)
```

You can read more about each one of these parameters *[here](https://developer.wordpress.org/reference/functions/add_submenu_page/)*.

$parent_slug is probably the most important parameter. This is where you can assign the options page to a custom post type. In WordPress, custom post types' URL in the back-end looks like this: 

SITE_URL/wp-admin/edit.php?post_type=CUSTOM_POST_TYPE_SLUG

This is true for all custom post types including pages. Post which is the default post type in WordPress only has the edit.php bit in its URL. 
Therefore, if we want our options page to become a child our custom post type in the back-end, we just need to change CUSTOM_POST_TYPE_SLUG to the slug/name of our custom post type.

$function is the callback function in which you will add your fields. I think the other parameters are pretty self explanatory. 

Once done, we just need to put this inside a function and hook it in to the 'admin_menu' action:

```php
// Add to functions.php

// Register submenu page 
add_action('admin_menu', 'msd_page_settings');
function msd_page_settings(){
	add_submenu_page(
		'edit.php?post_type=YOUR_POST_TYPE_SLUG',
		'Custom Post Type Page Title',
		'Custom Post Type Options',
		'edit_posts',
		'custom-post-type-options',
		'msd_callback_fuction',
		null
	);
}

// Callback function to display your options
function msd_callback_fuction(){	
}
```

### ACF Pro Options Page:
Adding an options page through the native way requires an additional step which is adding all the fields, capturing them and then displaying them on the pages that we want. ACF makes our lives much much easier (as always) here. We just need to add the below function to our functions.php and add the fields that we want through ACF's interface:

```php
// Add to functions.php
if (function_exists('acf_add_options_sub_page')) {
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Custom Post Type Options Title',
		'menu_title'	=> 'Custom Post Type Options',
		'parent_slug'	=> 'edit.php?post_type=YOUR_POST_TYPE_SLUG',
	));
}
```

parent_slug here is similar to the first parameter of add_submenu_page. We just need to change YOUR_POST_TYPE_SLUG to our custom post type's slug.

Hope you found this short tutorial useful!