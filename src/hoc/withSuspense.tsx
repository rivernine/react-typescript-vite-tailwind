import { ComponentType, ReactNode, Suspense } from 'react';

const DefaultFallback = <></>;

const withSuspense = <T extends JSX.IntrinsicAttributes>(
  Component: ComponentType<T>,
  displayName?: string,
  fallback: ReactNode = DefaultFallback
) => {
  const WrappedComponent: ComponentType<T> = (props: T) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  )

  WrappedComponent.displayName = `withSuspense(${
    Component.displayName || Component.name || displayName
  })`;

  return WrappedComponent;
}

export default withSuspense;