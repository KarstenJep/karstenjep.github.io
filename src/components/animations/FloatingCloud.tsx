import React from 'react';
import './FloatingCloud.css';

interface FloatingCloudProps {
  className?: string;
}

export default function FloatingCloud({ className }: FloatingCloudProps) {
  return (
    <div className={className ? className : 'cloud-content'}>
      <div className="cloud"></div>
      <div className="cloud x"></div>
    </div>
  );
}
