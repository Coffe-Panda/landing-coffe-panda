"use client";

import { useEffect, useState, useRef } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps extends ImageProps {
  fallback?: React.ReactNode;
  wrapperClassName?: string;
}

export function ImageWithSkeleton({
  fallback,
  className,
  wrapperClassName,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current?.complete && !loaded) {
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <div className={cn("relative w-full h-full", wrapperClassName)}>
      {!loaded && !hasError && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-300 animate-pulse rounded-md">
          <svg
            className="w-6 h-6 text-gray-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3.536-3.536A8 8 0 014 12z"
            />
          </svg>
        </div>
      )}

      {hasError && fallback ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-md text-sm text-gray-500">
          {fallback}
        </div>
      ) : (
        <Image
          ref={imgRef}
          {...props}
          className={cn(
            className,
            !loaded && "opacity-0",
            "transition-opacity duration-300"
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
