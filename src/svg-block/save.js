import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { svgUrl, width, height, backgroundColor, borderRadius, padding } = attributes;
    
    // Only pass CSS variables, let the stylesheet handle the rest
    const blockProps = useBlockProps.save({
        style: {
            '--svg-width': `${width}px`,
            '--svg-height': `${height}px`,
            '--svg-background': backgroundColor,
            '--svg-border-radius': `${borderRadius}px`,
            '--svg-padding': `${padding}px`
        }
    });

    // Simplified render without inline styles
    return (
        <div {...blockProps}>
            {svgUrl && <img src={svgUrl} alt="" decoding="async" />}
        </div>
    );
}
