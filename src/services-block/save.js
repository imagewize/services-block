/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { heading, intro } = attributes;
	
	return (
		<section id="services" className="py-16 bg-gray-50">
			<div className="container mx-auto max-w-4xl px-4">
				<div className="mb-12">
					<RichText.Content
						tagName="h2"
						className="text-3xl font-bold text-center font-open-sans"
						value={heading}
					/>
					<RichText.Content
						tagName="p"
						className="mx-auto max-w-2xl text-xl leading-relaxed my-8 text-center text-textBodyGray font-open-sans font-light container"
						value={intro}
					/>
				</div>
				<div className="flex flex-col gap-8">
					<InnerBlocks.Content />
				</div>
			</div>
		</section>
	);
}
