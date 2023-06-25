import { SVGProps, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="gray"
        d="m17.26 16.07-2.84-2.82a6.6 6.6 0 0 0 .29-7.79 6.67 6.67 0 1 0-1.46 8.97l2.82 2.83a.83.83 0 0 0 1.37-.27.83.83 0 0 0-.18-.91Zm-13.1-6.9a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
const Memo = memo(SvgComponent)

export { Memo as SearchIcon }
