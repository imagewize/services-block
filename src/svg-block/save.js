import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { svgUrl, width, height, backgroundColor, borderRadius, padding } = attributes;
    
    const blockProps = useBlockProps.save({
        style: {
            backgroundColor: backgroundColor?.color,  // Theme color object format
            borderRadius: `${borderRadius}px`,
            padding: `${padding}px`,
            width: `${width}px`,
            height: `${height}px`,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    return (
        <div {...blockProps}>
            {svgUrl && (
                <img 
                    src={svgUrl} 
                    alt=""
                    style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                    }}
                />
            )}
        </div>
    );
}
