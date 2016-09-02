<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2fea7dd00277caac81d9639b9922ea17
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Whoops\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Whoops\\' => 
        array (
            0 => __DIR__ . '/..' . '/filp/whoops/src/Whoops',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2fea7dd00277caac81d9639b9922ea17::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2fea7dd00277caac81d9639b9922ea17::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}