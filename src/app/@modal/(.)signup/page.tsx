'use client';

import style from '@/app/_component/modal.module.css'

export default function Page() {
    return (
        <div className={style.modalBackground}>
            <div className={style.modal}>
                회원가입 모달
            </div>
        </div>
    )
}