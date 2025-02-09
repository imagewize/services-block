/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	const blockProps = useBlockProps.save({
		className: 'py-16 bg-gray-50'
	});
	
	return (
		<section {...blockProps}>
			<div className="container mx-auto max-w-4xl px-4">
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
