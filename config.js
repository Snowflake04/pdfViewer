/**
 * Configuration file for the PDF viewer
 */

"use strict";

/**
 * Watermark configuration
 * @type {Object}
 */
const watermarkConfig = {
    /**
     * Enable or disable the watermark feature
     * @type {boolean}
     */
    enabled: true,
    
    /**
     * The text to display as watermark
     * @type {string}
     */
    text: "The file is only \n for development preview",

    /**
     * Font family of the watermark text
     * @type {string}
     */

    /**
     * Font family of the watermark text
     * @type {string}
     */
    
    /**
     * Opacity of the watermark (0-1)
     * @type {number}
     */
    opacity: 0.3,
    
    /**
     * Font size of the watermark text
     * @type {number}
     */
    fontSize: 24,
    
    /**
     * Color of the watermark text (CSS color format)
     * @type {string}
     */
    color: "rgba(128, 128, 128, 0.8)",
    
    /**
     * Rotation angle of the watermark in degrees
     * @type {number}
     */
    rotation: -45,
    
    /**
     * Whether to repeat the watermark across the page
     * @type {boolean}
     */
    repeat: true,
    
    /**
     * Spacing between repeated watermarks (in points)
     * @type {number}
     */
    repeatSpacing: 200
};

// Export the configuration
export { watermarkConfig };


/**
 * user access
 * watermark text
 * watermark override{
 * showWatermark?,
 * watermarkOpacity?,
 * watermarkRepeat?,
 * watermarkFontSize?
 * watermarkRotation?,
 * watermarkColor?,
 * watermarkRepeatSpacing?
 * }
 * File
 * Allow print
 * print Override{
 * includeWatermark?,
 * }
 * 
 */