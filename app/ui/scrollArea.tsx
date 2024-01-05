import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type OrientationVariant = 'vertical' | 'horizontal' | 'both';
type BreakpointVariant = 'all' | 'sm' | 'md' | 'lg';

type ScrollAreaProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  orientation?: OrientationVariant;
  breakpoint?: BreakpointVariant;
};

export function ScrollArea({
  children,
  orientation = 'vertical',
  breakpoint = 'all',
  className,
  ...props
}: ScrollAreaProps) {
  const scrollBarStyle =
    ' [&::-webkit-scrollbar-track]:bg-blue-950/20 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-blue-600 [&::-webkit-scrollbar-thumb:hover]:bg-blue-700 [&::-webkit-scrollbar-thumb]:rounded-full';
  const orientationVariantValues = {
    all: {
      vertical: 'overflow-y-auto' + scrollBarStyle,
      horizontal: 'overflow-x-auto' + scrollBarStyle,
      both: 'overflow-auto' + scrollBarStyle,
    },
    sm: {
      vertical: 'sm:overflow-y-auto' + scrollBarStyle,
      horizontal: 'sm:overflow-x-auto' + scrollBarStyle,
      both: 'sm:overflow-auto' + scrollBarStyle,
    },
    md: {
      vertical: 'md:overflow-y-auto' + scrollBarStyle,
      horizontal: 'md:overflow-x-auto' + scrollBarStyle,
      both: 'md:overflow-auto' + scrollBarStyle,
    },
    lg: {
      vertical: 'lg:overflow-y-auto' + scrollBarStyle,
      horizontal: 'lg:overflow-x-auto' + scrollBarStyle,
      both: 'lg:overflow-auto' + scrollBarStyle,
    },
  };

  return (
    <div
      className={clsx(
        orientationVariantValues[breakpoint][orientation],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
