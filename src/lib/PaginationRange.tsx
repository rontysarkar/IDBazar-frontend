
const PaginationRange = (currentPage:number,totalPage:number) => {
    const page = [];
    const showMax = 1;
    for(let i = 1;i<=totalPage;i++)
    {
        if(i === 1 || i === totalPage || (i >= currentPage-showMax && i <= currentPage+showMax )){
            page.push(i);
        }else if(page[page.length-1] !== '...'){
            page.push('...');
        }
    }
  return page;
}

export default PaginationRange