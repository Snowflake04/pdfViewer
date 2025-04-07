/**
 * Watermark functionality for PDF viewer
 */

"use strict";

import { watermarkConfig } from "./config.js";

/**
 * Draws a watermark directly on the canvas
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
 * @param {number} width - The width of the canvas
 * @param {number} height - The height of the canvas
 * @param {number} scale - The scale factor (zoom/72)
 */
export function drawWatermark(ctx, width, height, scale) {
  // Check if watermarking is enabled
  if (!watermarkConfig.enabled || !watermarkConfig.text) {
    return;
  }

  try {
    // Save the current canvas state
    ctx.save();

    // Set watermark text properties
    ctx.globalAlpha = watermarkConfig.opacity;
    ctx.fillStyle = watermarkConfig.color;
    ctx.font = `${watermarkConfig.fontSize * scale}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const splitText = watermarkConfig.text.split("\n");
    const lineSpacing = watermarkConfig.fontSize * scale * 1.2;

    // If repeating watermark is enabled
    if (watermarkConfig.repeat) {
      const spacing = watermarkConfig.repeatSpacing * scale;

      // Calculate how many watermarks to draw horizontally and vertically
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      // Draw watermarks in a grid pattern
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * spacing + spacing / 2;
          const y = i * spacing + spacing / 2;

          // Draw rotated text
          ctx.translate(x, y);
          ctx.rotate((watermarkConfig.rotation * Math.PI) / 180);
          if (splitText.length > 1) {
            // Calculate line spacing based on font size and scale
            splitText.forEach((line, index) => {
              ctx.fillText(
                line,
                0,
                (index - splitText.length / 2) * lineSpacing
              );
            });
          } else {
            ctx.fillText(watermarkConfig.text, 0, 0);
          }
          ctx.rotate(-(watermarkConfig.rotation * Math.PI) / 180);
          ctx.translate(-x, -y);
        }
      }
    } else {
      // Draw a single watermark in the center
      ctx.translate(width / 2, height / 2);
      ctx.rotate((watermarkConfig.rotation * Math.PI) / 180);
      if (splitText.length > 1) {
        // Calculate line spacing based on font size and scale
        splitText.forEach((line, index) => {
          ctx.fillText(line, 0, (index - splitText.length / 2) * lineSpacing);
        });
      } else {
        ctx.fillText(watermarkConfig.text, 0, 0);
      }
    }

    // Restore the canvas state
    ctx.restore();
  } catch (error) {
    console.error("Error drawing watermark:", error);
  }
}
