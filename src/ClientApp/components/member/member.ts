import Vue from "vue";
import { Component } from "vue-property-decorator";
import axios from 'axios';
import * as $ from 'jquery';

@Component
export default class MemberComponent extends Vue {
    deleteMemberId: string = "";
    // $ = JQuery;
    member: member = <member>{
        firstName: "",
        lastName: "",
        address: "",
        gender: 1,
        maintenance: 0,
        mntncPaidFreq: 1,
        occupier: 1,
    };

    memberList: member[] = [];

    mounted() {
        this.getMemberList();
    }

    getMemberList() {
        axios({
            method: 'get',
            url: 'https://localhost:44337/api/member/getMembersList'
        }).then((response: any) => {
            console.log(response.data);
            this.memberList = response.data;
        })
            .catch((error: any) => {
                console.log(error);
            });
    }

    addMember() {
        this.member = <member>{
            firstName: "",
            lastName: "",
            address: "",
            gender: 1,
            maintenance: 0,
            mntncPaidFreq: 1,
            occupier: 1,
        }
    }

    onSubmit(isEdit: boolean) {
        let method = isEdit ? "UpdateMember" : "CreateMember";
        this.addUpdateMember(method);
        let modal: any;

        this.member = <member>{
            gender: 1,
            mntncPaidFreq: 1
        };
        if (isEdit) {
            modal = this.$refs.editModal;
            $(modal).find(".close").click()
        } else {
            modal = this.$refs.addModal;
            $(modal).find(".close").click()
        }
    }

    addUpdateMember(methodName: string) {
        axios({
            method: 'post',
            url: 'https://localhost:44337/api/member/' + methodName,
            data: this.member
        }).then(() => {
            this.getMemberList();
        })
            .catch((error: any) => {
                console.log(error);
            });
    }

    onEditMember(member: member) {
        this.member = member;
    }

    onDeleteMember(memberId: string) {
        this.deleteMemberId = memberId;
    }

    onDeleteConf() {
        if (this.deleteMemberId !== "") {
            axios({
                method: 'post',
                url: 'https://localhost:44337/api/member/deleteMember',
                data: { MemberId: this.deleteMemberId }
            }).then((response: any) => {
                this.getMemberList();
            })
                .catch((error: any) => {
                    console.log(error);
                });
        }
    }
}

interface member {
    firstName: string;
    lastName: string;
    address: string;
    gender: number;
    occupier: number;
    mntncPaidFreq: number;
    maintenance: number,
    memberId: string;
}