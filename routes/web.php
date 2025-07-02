<?php

use Illuminate\Support\Facades\Route;

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);


Route::statamic('/gallery', 'templates.pages.gallery')->name('gallery');
