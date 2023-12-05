import { forwardRef, HTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const paragraphVariants = cva(
  'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg',
        sm: 'text-sm, sm:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

// forwardRef is a React function that enables you to pass a ref from a parent component to a child component, allowing you to access and manipulate the underlying DOM element of the child component.
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        // ref is the actual reference or pointer to the component or element, giving you direct access to it programmatically.
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  },
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
