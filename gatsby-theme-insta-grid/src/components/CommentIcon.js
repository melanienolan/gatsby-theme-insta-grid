import React from "react";

const CommentIcon = ({ width = "1rem", height = "1rem", fill = "black" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.7294 4.15355C23.7264 4.07147 23.7237 3.9896 23.7209 3.90752C23.6881 2.93433 23.5756 2.05514 22.933 1.27608C22.3438 0.561374 21.3497 0.328223 20.4758 0.247488C20.425 0.242691 20.3757 0.248458 20.3267 0.253362C20.2993 0.252231 20.275 0.246625 20.246 0.247488C16.5636 0.34617 12.8834 0.252284 9.20268 0.141853C9.17147 0.139374 9.14328 0.132691 9.11073 0.132691H4.28908C4.27059 0.132691 4.25486 0.137056 4.23669 0.137595C4.21508 0.136787 4.19633 0.132098 4.17412 0.132691C2.32173 0.162656 0.757095 1.1684 0.422835 3.07241C0.406559 3.16549 0.403271 3.25792 0.40575 3.34938C0.399283 3.38689 0.388935 3.42192 0.385917 3.46202C0.201971 5.87384 0.0837786 8.2904 0.0332785 10.7084C0.00751652 11.9428 -0.000406117 13.1776 0.00945675 14.4122C0.0195891 15.6938 -0.137893 17.0316 0.556011 18.186C1.17026 19.2082 2.19853 19.5451 3.30991 19.7484C3.36149 19.758 3.41651 19.7615 3.47359 19.7627C3.47785 19.7627 3.48151 19.7635 3.4966 19.7629C3.53163 19.7629 3.56365 19.767 3.60062 19.7638C5.96054 19.5487 8.32391 19.4425 10.6929 19.4247C10.8571 19.5219 11.0229 19.6163 11.1906 19.7071C11.2049 19.7167 11.2149 19.7282 11.2301 19.7375C13.674 21.2315 16.226 22.5175 18.8068 23.7554C19.3378 24.0099 19.8381 23.7997 20.1271 23.4374C20.3356 23.248 20.4456 22.9711 20.3679 22.6306C20.3551 22.5418 20.329 22.456 20.2866 22.3741L19.1054 19.3048H20.0167C20.0696 19.3048 20.1167 19.2963 20.1654 19.2901C21.008 19.3842 21.8756 19.3393 22.5883 18.8166C23.9717 17.8018 23.9559 15.8707 23.9873 14.3389C24.0325 12.1479 23.958 9.95323 23.8704 7.76422C23.8221 6.56068 23.771 5.3572 23.7294 4.15355ZM21.9141 16.0009C21.8623 16.4188 21.7337 16.8093 21.4401 17.1098C20.9028 17.499 20.0501 17.2535 19.4381 17.2385C18.9107 17.2253 18.345 17.2385 17.8354 17.2385C17.6953 17.2385 17.573 17.2655 17.4624 17.3066C16.8674 17.3597 16.3367 17.837 16.6096 18.5464C16.8994 19.2998 17.1893 20.0533 17.4788 20.807C15.854 19.9914 14.2513 19.1353 12.6897 18.2007C12.6336 18.1499 12.5723 18.1039 12.502 18.0683C12.2672 17.9498 12.0392 17.8193 11.8125 17.686C11.6462 17.4881 11.3999 17.3524 11.0622 17.3534C8.56908 17.3622 6.08299 17.4712 3.6003 17.6977C3.58456 17.6991 3.57168 17.7043 3.55637 17.7062C3.53185 17.7043 3.51067 17.6983 3.48534 17.6977C3.15474 17.6915 2.9016 17.6329 2.64883 17.4834C2.4589 17.3709 2.27948 17.1115 2.18592 16.8493C2.16042 16.7782 2.12846 16.7108 2.09203 16.6468C2.10297 16.5803 2.10971 16.5105 2.10804 16.4352C2.00542 12.1074 2.12227 7.7868 2.45178 3.47032C2.6595 2.56294 3.19193 2.21591 4.17418 2.20001C4.19309 2.19974 4.20894 2.19494 4.22726 2.19386C4.2485 2.195 4.26693 2.20001 4.28887 2.20001H8.88081C11.0739 2.20249 13.259 2.38218 15.4504 2.39818C16.5631 2.40627 17.6705 2.32607 18.7814 2.28241C19.5146 2.25353 20.5263 2.14008 21.1673 2.59183C21.9262 3.12647 21.7434 4.32602 21.7694 5.13116C21.8088 6.34515 21.8507 7.55926 21.8839 8.77357C21.9166 9.98816 21.9389 11.203 21.9391 12.4182C21.9391 13.0367 21.9341 13.6549 21.9207 14.2732C21.9103 14.7876 21.986 15.4204 21.9141 16.0009Z"
        fill={fill}
      />
    </svg>
  );
};

export default CommentIcon;
