import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { svgUrl, width, height, backgroundColor, borderRadius, padding } = attributes;
    
    const blockProps = useBlockProps.save({
        style: {
            // Container variables
            '--svg-background': backgroundColor,
            '--svg-border-radius': `${borderRadius}px`,
            '--svg-padding': `${padding}px`,
            // SVG variables
            '--svg-width': `${width}px`,
            '--svg-height': `${height}px`
        }
    });

    return (
        <div {...blockProps}>
            {svgUrl && <img src={svgUrl} alt="" decoding="async" />}
        </div>
    );
}
