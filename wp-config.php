<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'agweb');

/** MySQL database username */
define('DB_USER', 'ag');

/** MySQL database password */
define('DB_PASSWORD', 'hentai112');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '{,0-7CH~XPOflw}Ri.-j>|F)e~J($MGu8h_#/;zRGB^:hh<[5AS`h]o-@QDCZYja');
define('SECURE_AUTH_KEY',  'd}34d)`%m<5B[x`Q3B]nW8xdWw-!+S)}]mL$Z[|7be0+=mKo/(N7Y_ZuHqv`/|mN');
define('LOGGED_IN_KEY',    'pA};m$$u$74c%tyKX)W?L0+v749Ci(n?c (nKA3>~-(;v3QV;K3:1e~!w%s8AKAb');
define('NONCE_KEY',        'rI@eh~`^%Kofs*ZvHJnD*lpK.ep7PaZ ZE:{mg+t;C5>QsbAC{2)OExiA,|:JIFh');
define('AUTH_SALT',        '34I,7|!|0+#RQCOXF{kZ&jke:CniufV#QaBrd42:$1r`P_|HWtneE^ kG80LVB6:');
define('SECURE_AUTH_SALT', '3ZF.@i8[KH(~;s>0-WNX;4C#2y !T+;O{7w}PGDnM=rE~a}I|#E:G/-mF^0,[)@Z');
define('LOGGED_IN_SALT',   '8o$5wH0%d-G-LE c|63vLW4[w+ml>VaQ5j|SM+v$~<NLwbt.QWX+zMsVY>=A-X0o');
define('NONCE_SALT',       '?yhy}k3^gegSTHBdj~>bS6zmaTPu?7Du+C$&@Frlt?SiR_+G)w?N8km289|B:!6>');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
