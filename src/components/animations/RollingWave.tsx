import React from 'react';
import './RollingWave.css';

export default function RollingWave() {
  return (
    <svg
      version="1.1"
      className="wave"
      xmlns="http://www.w3.org/200/svg"
      preserveAspectRatio="none"
    >
      <path
        d="
                M0 67
                C 273,183
                822, -40
                2620,106
                V 600
                H 0
                V 67
                Z
                "
      >
        <animate
          repeatCount="indefinite"
          attributeName="d"
          dur="30s"
          attributeType="XML"
          values="
                        M0 77
                        C 473, 283
                        822, -40
                        2620, 116
                        V 600
                        H 0
                        V 300
                        Z;
                        M0 77
                        C 473, -40
                        1222, 283
                        2620, 136
                        V 600
                        H 0
                        V 300
                        Z;
                        M0 77
                        C 973, 260
                        1722, -53
                        2620, 120
                        V 600
                        H 0
                        V 300
                        Z;
                        M0 77
                        C 473, 283
                        822, -40
                        2620, 116
                        V 600
                        H 0
                        V 300
                        Z"
        ></animate>
      </path>
    </svg>
  );
}
